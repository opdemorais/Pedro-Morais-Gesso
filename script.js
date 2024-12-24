function contatoWhatsApp() {
    const phoneNumber = '5575983164956'; // Substitua com o número correto
    const message = "Olá, gostaria de saber mais sobre seus serviços de gesso!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
