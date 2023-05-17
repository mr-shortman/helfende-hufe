type NavLink = {
  label: string;
  path: string;
  icon?: string;
};

interface SiteConfig {
  siteName: string;
  logoUrl: stirng;
  navigator: {
    links: NavLink[];
    buttons?: NavLink[];
  };
}

interface LayoutProps {
  children: JSX.Element;
}
