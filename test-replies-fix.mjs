import { Innertube, YTNodes, Helpers } from './dist/src/platform/node.js';

const VIDEO_ID = 'OGbhJjXl9Rk';

async function test() {
  console.log('Creating Innertube session...');
  const innertube = await Innertube.create({ generate_session_locally: true });

  console.log(`Fetching comments for ${VIDEO_ID}...`);
  const comments = await innertube.getComments(VIDEO_ID);

  const thread = comments.contents.find(t => t.has_replies);
  if (!thread) {
    console.log('No comment with replies found.');
    return;
  }

  console.log(`Found comment thread: ${thread.comment?.comment_id}`);
  console.log(`Author: ${thread.comment?.author?.name}`);

  const hasContinuation = !!thread.comment_replies_data?.contents?.firstOfType(YTNodes.ContinuationItem);
  console.log(`Has pre-built continuation token: ${hasContinuation}`);

  thread.setActions(innertube.actions);

  // Test 1: normal path (with continuation token)
  try {
    console.log('\n[Test 1] getReplies(videoId) with continuation token...');
    const normal = await thread.getReplies(VIDEO_ID);
    console.log(`✅ Success! Got ${normal.replies?.length || 0} replies.`);
  } catch (err) {
    console.error('❌ Test 1 failed:', err.message);
    process.exit(1);
  }

  // Test 2: fallback path (remove continuation token artificially)
  const originalContents = thread.comment_replies_data?.contents;

  try {
    if (thread.comment_replies_data) {
      thread.comment_replies_data.contents = Helpers.observe([]);
    }

    console.log('\n[Test 2] getReplies(videoId) WITHOUT continuation token (fallback)...');
    const fallback = await thread.getReplies(VIDEO_ID);
    console.log(`✅ Fallback worked! Got ${fallback.replies?.length || 0} replies.`);
  } catch (err) {
    console.error('❌ Test 2 failed:', err.message);
    process.exit(1);
  } finally {
    if (thread.comment_replies_data) {
      thread.comment_replies_data.contents = originalContents;
    }
  }

  // Test 3: ensure it throws without videoId when no continuation
  try {
    if (thread.comment_replies_data) {
      thread.comment_replies_data.contents = Helpers.observe([]);
    }

    console.log('\n[Test 3] getReplies() without videoId AND without token (should throw)...');
    await thread.getReplies();
    console.error('❌ Test 3 failed: should have thrown!');
    process.exit(1);
  } catch (err) {
    if (err.message.includes('videoId is required')) {
      console.log(`✅ Correctly threw: ${err.message}`);
    } else {
      console.error('❌ Test 3 threw unexpected error:', err.message);
      process.exit(1);
    }
  } finally {
    if (thread.comment_replies_data) {
      thread.comment_replies_data.contents = originalContents;
    }
  }

  console.log('\n🎉 All tests passed!');
}

test().catch(console.error);
