type NavLink = {
  label: string;
  path: string;
  icon?: string;
};

type SiteNavigator = {
  links: NavLink[];
  buttons?: NavLink[];
};

interface SiteConfig {
  siteName: string;
  logoUrl: stirng;
  navigator: SiteNavigator;
}

interface LayoutProps {
  children: JSX.Element;
}
