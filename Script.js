//  JSON data
const assets = [
    {
        title: "Asset 1",
        type: "Article",
        description: "This is a description for Asset 1.",
        media: null
    },
    {
        title: "Asset 2",
        type: "Video",
        description: "This is a description for Asset 2.",
        media: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Asset 3",
        type: "Audio",
        description: "This is a description for Asset 3.",
        media: "https://drive.google.com/uc?id=FILE_ID" // Replace FILE_ID with actual ID
    }
];

// Function to render assets
function renderAssets() {
    const container = document.getElementById('asset-container');
    assets.forEach((asset, index) => {
        const assetDiv = document.createElement('div');
        assetDiv.className = 'asset';

        const assetHeader = document.createElement('div');
        assetHeader.className = 'asset-header';
        assetHeader.innerHTML = `<span>${asset.title} (${asset.type})</span><span class="arrow">▶</span>`;
        assetDiv.appendChild(assetHeader);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        descriptionDiv.innerHTML = `<p>${asset.description}</p>`;

        // Add media if available
        if (asset.media) {
            if (asset.type === "Video") {
                descriptionDiv.innerHTML += `<div class="video-container"><iframe width="100%" height="200" src="${asset.media}" frameborder="0" allowfullscreen></iframe></div>`;
            } else if (asset.type === "Audio") {
                descriptionDiv.innerHTML += `<div class="audio-container"><audio controls><source src="${asset.media}" type="audio/mpeg">Your browser does not support the audio element.</audio></div>`;
            }
        }

        assetDiv.appendChild(descriptionDiv);
        container.appendChild(assetDiv);

        // Toggle description on header click
        assetHeader.addEventListener('click', () => {
            const isExpanded = descriptionDiv.classList.toggle('expanded');
            assetHeader.querySelector('.arrow').style.transform = isExpanded ? 'rotate(90deg)' : 'rotate(0deg)';
        });
    });
}

// Initialize rendering
renderAssets();
