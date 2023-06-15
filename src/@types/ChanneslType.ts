export type DisplayPriorities = {
  [countryCode: string]: number;
};

export type ResultItem = {
  display_priorities: DisplayPriorities;
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
};

export type ResultChannels = {
  result: ResultItem[];
};
