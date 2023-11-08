import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const questions = [
  { question: "What are the different data types in JavaScript?", key: "1" },
  { question: "What is the difference between var and let?", key: "2" },
  {
    question: "What is the difference between Call, Apply and Bind?",
    key: "3",
  },
  { question: "What is the difference between == and ===?", key: "4" },
  {
    question: "What are the possible ways to create objects in JavaScript?",
    key: "5",
  },
];
const tags = [
  { tag: "JAVASCRIPT", value: 20152, _id: 1 },
  { tag: "NEXT.JS", value: 18493, _id: 2 },
  {
    tag: "REACT.JS",
    value: 16269,
    _id: 3,
  },
  { tag: "NODE.JS", value: 15326, _id: 4 },
  {
    tag: "PYTHON",
    value: 21568,
    _id: 5,
  },
  { tag: "MICROSOFT AZURE", value: 5621, _id: 6 },
  { tag: "MACHINE LEARNING", value: 15896, _id: 7 },
  { tag: "POSTGRESQL", value: 8546, _id: 8 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((item) => {
            return (
              <Link
                href={`/qustions/${item.key}`}
                key={item.key}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="text-dark500_light700 body-medium">
                  {item.question}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map((item) => {
            return (
              <RenderTag
                key={item._id}
                _id={item._id}
                name={item.tag}
                totalQuestions={item.value}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
