
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  beforeUrl?: string;
  afterUrl?: string;
  completionDate: string;
  area: string;
  details: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  capabilities: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
