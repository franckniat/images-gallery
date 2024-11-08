export type ImageModel = {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  likes: number;
  location: Location;
  tags: [title: string];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    html: string;
    download: string;
  };
  user: User;
}

type Location = {
  city: string,
  country: string
}

type User = {
  id: string;
  name: string;
  username: string;
  location: string;
  portfolio_url: string;
  bio: string;
}

export type SearchResponse = {
  total: number;
  total_pages: number;
  results: ImageModel[];
}
