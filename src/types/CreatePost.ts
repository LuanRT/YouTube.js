export interface ImageReader {
  body: BodyInit;
  size: number;
  height: number;
  width: number;
  base64: string;
};

/*
  all coords 0-1
  very left = 0
  very right = 1
  very top = 0
  very bottom = 1
*/
export interface PreviewCoordinates {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PollAttachmentData_LocalImageSrc {
  privateDoNotAccessOrElseWrappedUrl: string;
}
export type PollAttachmentData_ImageBlob = object;
export interface PollAttachmentData_Image {
  id: number;
  imageBlob: PollAttachmentData_ImageBlob;
  localImageSrc: PollAttachmentData_LocalImageSrc;
  naturalWidth: number;
  naturalHeight: number;
  previewCoordinates: PreviewCoordinates;
  encryptedBlobId: string;
}
export interface PollAttachmentData_Option {
  text: string;
  image: PollAttachmentData_Image;
}
export interface PollAttachmentData {
  pollAttachmentData: { options: PollAttachmentData_Option[] };
}

export interface ImagesAttachment_PostImageData {
  encryptedBlobId: string;
  previewCoordinates: PreviewCoordinates;
}
export interface ImagesAttachment {
  imagesAttachment: { imagesData: ImagesAttachment_PostImageData[] };
}

export interface QuizAttachmentData_PollOption {
  text: string;
  explanation: string;
}
export interface QuizAttachmentData_Option {
  pollOption: QuizAttachmentData_PollOption;
  isCorrect: boolean;
}
export interface QuizAttachmentData {
  quizAttachmentData: { options: QuizAttachmentData_Option[]; };
}

export interface PollAttachment {
  pollAttachment: { choices: string[] };
}

export interface VideoAttachment {
  videoAttachment: { videoId: string };
}

export interface CreatePostPayloadBase {
  commentText: string;
  createBackstagePostParams: string;
}
export type CreatePostPayload = CreatePostPayloadBase | (CreatePostPayloadBase & (VideoAttachment|PollAttachment|QuizAttachmentData|ImagesAttachment|PollAttachmentData));

export interface CreatePostImage {
  reader: ImageReader;
  preview_coordinates: PreviewCoordinates;
}
export interface CreatePostOptions_ImagePoll {
  type: 'IMAGE_POLL';
  options: {text: string, image: CreatePostImage}[];
}
export interface CreatePostOptions_Image {
  type: 'IMAGE';
  images: CreatePostImage[];
}
export interface CreatePostOptions_Quiz {
  type: 'QUIZ';
  choices: (QuizAttachmentData_PollOption & {is_correct: boolean})[];
}
export interface CreatePostOptions_Poll {
  type: 'POLL';
  choices: string[];
}
export interface CreatePostOptions_Video {
  type: 'VIDEO';
  video_id: string;
}
export type CreatePostOptions = (CreatePostOptions_Video|CreatePostOptions_Poll|CreatePostOptions_Quiz|CreatePostOptions_Image|CreatePostOptions_ImagePoll);