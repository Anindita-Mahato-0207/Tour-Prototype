function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'flex';
    activeSection.style.justifyContent = 'center';
    activeSection.style.alignItems = 'center';
}
