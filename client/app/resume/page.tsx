import Link from "next/link";

// pages/resume.js
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <Link href="/">Home</Link>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8">
       <h1 className="text-3xl font-bold text-gray-800 mb-2">Nguyễn Văn A</h1>
        <p className="text-gray-600 mb-4">Fullstack Developer | React | Java Spring Boot</p>

        <hr className="my-4" />

        {/* Thông tin liên hệ */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Thông tin liên hệ</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Email: nguyenvana@example.com</li>
            <li>Phone: 0123 456 789</li>
            <li>Github: github.com/nguyenvana</li>
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
          </ul>
        </div>

        {/* Kinh nghiệm */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Kinh nghiệm</h2>
          <div>
            <p className="font-medium text-gray-800">Công ty ABC (2022 - nay)</p>
            <p className="text-sm text-gray-600">- Phát triển ứng dụng React + Spring Boot</p>
            <p className="text-sm text-gray-600">- Triển khai CI/CD, Docker, PostgreSQL</p>
          </div>
        </div>

        {/* Kỹ năng */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Kỹ năng</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>HTML, CSS, Tailwind CSS</li>
            <li>JavaScript, React, Next.js</li>
            <li>Java, Spring Boot, REST API</li>
            <li>PostgreSQL, Redis, Kafka</li>
            <li>Docker, Kubernetes, Git</li>
          </ul>
        </div>

        {/* Học vấn */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Học vấn</h2>
          <p className="text-gray-600">Đại học Bách Khoa Hà Nội - Kỹ sư phần mềm (2017 - 2022)</p>
        </div>
      </div>
    </div>
  );
}