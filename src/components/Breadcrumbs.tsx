import clsx from "clsx";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(
        "mt-2 w-full overflow-x-auto text-blue-500",
        className
      )}
    >
      <ol className="flex w-max items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.25em] sm:text-xs">
        {items.map(({ label, href }, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${label}-${index}`} className="flex items-center gap-2">
              {href && !isLast ? (
                <Link
                  href={href}
                  className="rounded-full px-2 py-1 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {label}
                </Link>
              ) : (
                <span className="rounded-full px-2 py-1 text-blue-900">
                  {label}
                </span>
              )}
              {!isLast && <span aria-hidden className="text-blue-200">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
