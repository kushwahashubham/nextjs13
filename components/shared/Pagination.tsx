"use client";
import { formUrlQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const Pagination = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  //   const paramFilter = searchParams.get("page");

  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });
    router.push(newUrl);
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation("prev")}
        className=" light-border-2 btn background-light800_dark300 flex min-h-[36px] items-center justify-center gap-2 rounded-lg border px-4 py-2 shadow"
      >
        <p className="body-medium text-dark400_light800 ">Prev</p>
      </Button>
      <div className="flex min-w-[40px] items-center justify-center rounded-lg bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>
      <Button
        disabled={!isNext}
        onClick={() => handleNavigation("next")}
        className="body-medium light-border-2 btn background-light800_dark300 text-dark400_light800 min-h-[36px] gap-2 rounded-lg border px-4 py-2 shadow"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
