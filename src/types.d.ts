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
  initialPath?: string;
}

interface LayoutProps {
  children: JSX.Element;
}
