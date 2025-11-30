// Load client config and fill page
fetch('config.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('site-name').innerText = data.site_name;
    document.title = data.site_name;

    document.getElementById('logo').src = data.logo;
    document.getElementById('hero-text').innerText = data.hero_text;
    document.getElementById('about-text').innerText = data.about_text;
    document.getElementById('contact-email').innerText = data.contact_email;
  })
  .catch(err => console.error('Error loading config:', err));
