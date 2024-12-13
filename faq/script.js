document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        var panelContent = this.nextElementSibling;
        if (panelContent.style.maxHeight) {
            panelContent.style.maxHeight = null;
            panelContent.style.opacity = 0;
        } else {
            panelContent.style.maxHeight = panelContent.scrollHeight + "px";
            panelContent.style.opacity = 1;
        }
    });
});

document.querySelectorAll('.sub-accordion').forEach(button => {
    button.addEventListener('click', function() {
        var subPanelContent = this.nextElementSibling;
        if (subPanelContent.style.maxHeight) {
            subPanelContent.style.maxHeight = null;
            subPanelContent.style.opacity = 0;
        } else {
            // Calculate total maximum height considering other open sub-panels
            let totalHeight = Array.from(button.parentNode.parentNode.querySelectorAll('.sub-panel-content'))
                .filter(panel => panel !== subPanelContent && panel.style.maxHeight)
                .reduce((total, panel) => total + panel.scrollHeight, subPanelContent.scrollHeight);
            subPanelContent.style.maxHeight = totalHeight + "px";
            subPanelContent.style.opacity = 1;
        }
    });
});
