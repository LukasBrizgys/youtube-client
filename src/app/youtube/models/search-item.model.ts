interface ThumbnailInfo {
  url: string;
  width: number;
  height: number;
}
interface Thumbnails {
  default: ThumbnailInfo;
  medium: ThumbnailInfo;
  high: ThumbnailInfo;
  standard: ThumbnailInfo;
  maxres: ThumbnailInfo;
}
interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
interface Localised {
  title: string;
  description: string;
}
interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localised;
  defaultAudioLanguage: string;
}

class SearchItem {
  id: string;

  kind: string;

  etag: string;

  snippet: Snippet;

  statistics: Statistics;

  constructor(
    id: string,
    kind: string,
    etag: string,
    snippet: Snippet,
    statistics: Statistics,
  ) {
    this.id = id;
    this.kind = kind;
    this.etag = etag;
    this.snippet = snippet;
    this.statistics = statistics;
  }
}
export default SearchItem;
