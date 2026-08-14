export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  colorTheme: "blue" | "pink" | "green";
}

export interface StatItem {
  value: string;
  label: string;
  colorTheme: "blue" | "pink" | "green" | "gray";
}

export interface CoverageItem {
  city: string;
  suffix?: string;
  theme: "blue" | "pink" | "green" | "gray";
}
