class SearchItem {
  id: string;

  title: string;

  description: string;

  thumbnails: Object;

  tags: string[];

  statistics: Object;

  constructor(
    id: string,
    title: string,
    description: string,
    thumbnails: Object,
    tags: string[],
    statistics: Object,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.thumbnails = thumbnails;
    this.tags = tags;
    this.statistics = statistics;
  }
}
export default SearchItem;
