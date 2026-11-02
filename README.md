# Website ôn tập lớp 8

Website tĩnh gồm menu chính và các bộ đề ôn tập. Dự án không dùng framework, thư viện ngoài, máy chủ hay cơ sở dữ liệu; có thể chạy trực tiếp bằng cách mở `index.html` hoặc triển khai bằng GitHub Pages.

## Nội dung hiện có

- **Lịch sử 8:** 20 câu trắc nghiệm nhiều lựa chọn và 5 câu đúng/sai (mỗi câu 4 ý).
  - Xáo trộn thứ tự câu hỏi ở Phần I và Phần II.
  - Xáo trộn đáp án A–D ở Phần I.
  - Giữ nguyên thứ tự a, b, c, d trong từng câu Phần II.
- **KHTN 8 – Vật lí:** 15 câu trắc nghiệm và 11 ý đúng/sai.
  - Xáo trộn thứ tự câu hỏi và đáp án A–D ở Phần I.
  - Giữ nguyên thứ tự các ý a–k ở Phần II.
- Cả hai đề đều có thanh tiến độ, nút nộp bài, chấm điểm, hiển thị đáp án đúng/sai và nút làm lại.

## Cấu trúc thư mục

```text
.
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── site.css
│   └── js/
│       └── khtn-vat-li.js
└── pages/
    ├── lich-su.html
    └── khtn8-vat-li.html
```

## Chạy trên máy tính

1. Giải nén tệp ZIP.
2. Mở thư mục vừa giải nén.
3. Mở `index.html` bằng Chrome, Edge hoặc trình duyệt khác.

Không cần cài đặt thêm và không cần kết nối Internet.

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub.
2. Giải nén ZIP trên máy tính.
3. Tải **toàn bộ nội dung bên trong thư mục dự án** lên repository. `index.html` phải nằm ngay ở thư mục gốc repository, không nằm trong một thư mục con.
4. Mở **Settings → Pages** của repository.
5. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
6. Chọn branch `main`, thư mục `/(root)`, sau đó nhấn **Save**.
7. Chờ GitHub Pages triển khai và mở đường dẫn website được hiển thị tại trang Pages.

## Cách bổ sung môn học mới

- Tạo trang HTML mới trong thư mục `pages/`.
- Đặt liên kết đến trang đó trong `index.html`.
- Dùng đường dẫn tương đối đến tài nguyên, ví dụ `../assets/css/site.css` khi trang nằm trong `pages/`.

## Lưu ý về chấm điểm

- **Lịch sử:** Phần I 5 điểm, Phần II 5 điểm; tổng 10 điểm.
- **KHTN 8 – Vật lí:** Phần I 5 điểm, Phần II 5 điểm; tổng 10 điểm.
- Mỗi lượt làm lại tạo thứ tự xáo trộn mới cho những phần được thiết kế để xáo trộn.
