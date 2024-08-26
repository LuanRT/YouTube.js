import { serve } from 'https://deno.land/std@0.148.0/http/server.ts';

const port = 8080;

function copyHeader(headerName: string, to: Headers, from: Headers) {
  const hdrVal = from.get(headerName);
  if (hdrVal) {
    to.set(headerName, hdrVal);
  }
}

const handler = async (request: Request): Promise<Response> => {
  // If options send do CORS preflight
  if (request.method === 'OPTIONS') {
    const response = new Response('', {
      status: 200,
      headers: new Headers({
        'Access-Control-Allow-Origin': request.headers.get('origin') || '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-goog-visitor-id, x-goog-api-key, x-origin, x-youtube-client-version, x-youtube-client-name, x-goog-api-format-version, x-user-agent, Accept-Language, Range, Referer',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'true'
      })
    });
    return response;
  }

  const url = new URL(request.url, 'http://localhost/');
  if (!url.searchParams.has('__host')) {
    return new Response(
      'Request is formatted incorrectly. Please include __host in the query string.',
      { status: 400 }
    );
  }

  // Set the URL host to the __host parameter
  url.host = url.searchParams.get('__host')!;
  url.protocol = 'https';
  url.port = '443';
  url.searchParams.delete('__host');

  // Copy headers from the request to the new request
  const request_headers = new Headers(
    JSON.parse(url.searchParams.get('__headers') || '{}')
  );
  copyHeader('range', request_headers, request.headers);

  if (!request_headers.has('user-agent'))
    copyHeader('user-agent', request_headers, request.headers);

  url.searchParams.delete('__headers');

  // Make the request to YouTube
  const fetchRes = await fetch(url, {
    method: request.method,
    headers: request_headers,
    body: request.body
  });

  // Construct the return headers
  const headers = new Headers();

  // Copy content headers
  copyHeader('content-length', headers, fetchRes.headers);
  copyHeader('content-type', headers, fetchRes.headers);
  copyHeader('content-disposition', headers, fetchRes.headers);
  copyHeader('accept-ranges', headers, fetchRes.headers);
  copyHeader('content-range', headers, fetchRes.headers);

  // Add cors headers
  headers.set(
    'Access-Control-Allow-Origin',
    request.headers.get('origin') || '*'
  );
  headers.set('Access-Control-Allow-Headers', '*');
  headers.set('Access-Control-Allow-Methods', '*');
  headers.set('Access-Control-Allow-Credentials', 'true');

  // Return the proxied response
  return new Response(fetchRes.body, {
    status: fetchRes.status,
    headers: headers
  });
};

await serve(handler, { port });