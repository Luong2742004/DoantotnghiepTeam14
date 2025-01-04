// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';  // Import file CSS
import logo from '../assets/images/logo2.jpg';  // Đảm bảo đường dẫn đúng

const AboutusDetail = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content-container">
        <div className="about-us-text-content">
          <p className="about-us-paragraph">
            Tại <strong>AteBook</strong>, chúng tôi cam kết xây dựng một hệ thống chia sẻ thực phẩm bền vững và hiệu quả, giúp giảm lãng phí thực phẩm, hỗ trợ cộng đồng, và thúc đẩy lối sống xanh. 
            Sứ mệnh của chúng tôi là tạo nên một mạng lưới kết nối những người muốn chia sẻ thực phẩm và những người cần hỗ trợ thực phẩm miễn phí, 
            thông qua các tủ lạnh cộng đồng và ứng dụng thông minh.
          </p>
          <p className="about-us-paragraph">
            Với hệ thống của chúng tôi, bạn không chỉ giúp giảm lượng rác thải thực phẩm mà còn mang đến những bữa ăn ấm áp cho những người cần. 
            Chúng tôi tin rằng mỗi hành động nhỏ có thể góp phần tạo nên sự thay đổi lớn, thúc đẩy lối sống xanh và ý thức cộng đồng.
          </p>
          <p className="about-us-paragraph">
            AteBook là nơi kết nối những tấm lòng nhân ái. Cho dù bạn muốn chia sẻ thực phẩm dư thừa hay cần hỗ trợ, chúng tôi luôn sẵn sàng đồng hành cùng bạn. 
            Tham gia ngay hôm nay để cùng xây dựng một cộng đồng bền vững và sẻ chia!
          </p>
          
          <h3 className="about-us-subtitle">Our Values</h3>
          <ul className="about-us-values-list">
            <li>Sustainability: Chúng tôi cam kết bảo vệ môi trường và thúc đẩy lối sống bền vững.</li>
            <li>Community Connection: Tạo dựng sự gắn kết và lòng tin trong cộng đồng.</li>
            <li>Transparency: Đảm bảo hệ thống hoạt động minh bạch, hiệu quả.</li>
            <li>Empathy: Ưu tiên hỗ trợ những người khó khăn và thúc đẩy tinh thần sẻ chia.</li>
          </ul>
        </div>

        <div className="about-us-image-container">
          <img 
            src={logo}
            alt="Food Sharing System" 
            className="about-us-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusDetail;
