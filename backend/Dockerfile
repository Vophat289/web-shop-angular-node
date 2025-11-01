# Sử dụng image Node.js chính thức (phiên bản nhẹ)
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install --production

# Copy toàn bộ source code vào container
COPY . .

# Đặt biến môi trường mặc định
ENV PORT=3000

# Mở port 3000 ra bên ngoài
EXPOSE 3000

# Lệnh khởi chạy app
CMD ["npm", "start"]
