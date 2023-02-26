import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <section className="text-center bg-white dark:bg-gray-800">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-black dark:text-inherit font-bold">
              문제가 발생하였습니다.
            </h1>
            <p className="py-6">
              올바르지 않은 접근입니다.
              <br />
              ERROR CODE : 404
            </p>
            <Link to="/">
              <button className="btn btn-primary">홈으로 돌아가기</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
