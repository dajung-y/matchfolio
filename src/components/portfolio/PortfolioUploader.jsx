import uploadIcon from "../../assets/icons/upload64.png";

import pdfIcon from "../../assets/icons/pdf64.png";
import deleteIcon from "../../assets/icons/delete64.png";

export default function PortfolioUploader({
  file,
  onFileSelect,
  onFileRemove,
}) {
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    onFileSelect(selectedFile);
  };

  return (
    <div className="w-full max-w-3xl rounded border border-primary-light border-dashed bg-primary-extra-light px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        {file ? (
          <>
            <p className="font-semibold text-primary">파일이 첨부되었습니다.</p>

            <div className="mt-4 w-full max-w-xl rounded bg-white px-4 py-2 flex justify-between">
              {/* 파일 정보 */}
              <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-full">
                  <img src={pdfIcon} className="w-10 h-10" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-primary">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)}MB
                  </p>
                </div>
              </div>
              {/* 삭제 */}
              <div className="flex items-center justify-center">
                <button
                  onClick={onFileRemove}
                  className="flex items-center justify-center p-2 rounded-full bg-primary-light cursor-pointer">
                  <img src={deleteIcon} className="w-6 h-6" />
                </button>
              </div>
            </div>

            <label
              htmlFor="portfolio-file"
              className="mt-4 rounded-lg bg-primary font-semibold text-white px-16 py-3 cursor-pointer">
              변경하기
            </label>
          </>
        ) : (
          <>
            <div className="mb-2 rounded-full bg-primary-light p-1">
              <img src={uploadIcon} alt="upload" className="w-10 h-10" />
            </div>
            <p className="text-sm font-semibold text-primary-medium text-center">
              PDF 파일을 드래그하거나 클릭하여 업로드해주세요.
            </p>
            <span className="text-sm text-gray-500">(최대 10MB)</span>
            <label
              htmlFor="portfolio-file"
              className="mt-4 rounded-lg bg-primary font-semibold text-white px-16 py-3 cursor-pointer">
              파일 선택하기
            </label>

            <p className="mt-2 text-sm text-gray-500">
              PDF 파일만 업로드할 수 있어요.
            </p>
          </>
        )}

        <input
          id="portfolio-file"
          type="file"
          accept="application/pdf"
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
