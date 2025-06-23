window.openPrintWindow = (content) => {
    sfBlazor.Grid.printGrid = function (e) {
        let printWindow = window.open("", "_blank", "width=" + window.outerWidth + ",height=" + window.outerHeight);
        if (printWindow) {
            printWindow.document.write(content);
            printWindow.document.close();
            printWindow.print();
        } 
    }
};

window.registerDebouncedResizeCallback = function (dotNetHelper) {
    let timeout;
    let lastCategory = window.innerWidth <= 800 ? "mobile" : "desktop";

    window.addEventListener("resize", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const category = window.innerWidth <= 800 ? "mobile" : "desktop";
            if (category !== lastCategory) {
                lastCategory = category;
                dotNetHelper.invokeMethodAsync("OnResizeCategoryChanged", category);
            }
        }, 300);
    });
};



