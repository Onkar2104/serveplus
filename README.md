# serveplus - Food Wastage Prevention Project 🍽️ 

## 🌍 About the Project
This is a **Django-based web application** designed to **prevent food wastage** by connecting individuals, restaurants, and organizations/NGO's with surplus food to those in need. The platform enables easy food donation, pickup coordination, and promotes sustainability.

## 🚀 Features
- **User Authentication** – Register/Login using email or social accounts.
- **Food Listing** – Users can list surplus food with details like quantity, location, and pickup time.
- **Food Requests** – Needy individuals or NGOs can request available food.
- **Location-Based Matching** – Smart system to connect donors with nearby recipients.
- **Notifications** – Email/SMS alerts for food availability and pickup updates.
- **Admin Dashboard** – Manage users, donations, and track food distribution.
- **Analytics & Reports** – Insights on food wastage reduction and impact.

## 🛠️ Technologies Used
### **Backend**
- Django
- Django REST Framework (if APIs are needed)
- PostgreSQL (Database)
- Celery + Redis (for background tasks like notifications)
- GeoDjango (for location-based food matching, optional)

### **Frontend**
- HTML, CSS, JavaScript
- Bootstrap/Tailwind CSS (for UI design)
- React.js (for interactive frontend, optional)

### **Authentication & Security**
- Django Authentication
<!-- - OAuth (Google, Facebook, etc.) -->
- JWT or OAuth2 (for secure API access)

### **Hosting & Deployment**
- AWS EC2
- Docker (for containerization)

### **Additional Services**
- Google Maps API (for location tracking)
- Firebase Notifications (for mobile push notifications)
- Razorpay/Stripe (for monetary donations, if needed)

## 📌 Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Onkar2104/serveplus.git && cd serveplus
   ```

2. **Build and run the Docker containers. This might take a while.**
   ```bash
   docker-compose up --build
   ```
   
6. **Access the Application**
   Open your browser and go to `http://127.0.0.1:8000/`

<!-- ## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository, raise issues, and submit pull requests.
Check [Cpntributing Guideline.](https://github.com/Onkar2104/serveplus/blob/main/CONTRIBUTING.md)

## 📧 Contact
For any queries, reach out at **ijareonkar2184@outlook.com** / **nimbalkarjagjeet@gmail.com** or open an issue in this repository.

---
Made with ❤️ to reduce food wastage and help communities! 🌱
