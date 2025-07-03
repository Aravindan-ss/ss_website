import Link from "next/link";

interface BreadCrumb {
  label: string;
  link: string;
}

interface BreadCrumbsProps {
  breadcrumbs: BreadCrumb[];
}
export default function BreadCrumbs({ breadcrumbs }: BreadCrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-gray-600">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="flex items-center space-x-2">
          <Link
            href={breadcrumb.link}
            className="text-white text-semibold text-xl"
          >
            {breadcrumb.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="text-gray-400">{">"}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
