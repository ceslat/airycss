const Airy = () => {
    const airy = this;
    this.VERSION = "1.0.0";

    this.Progress = {
        render: () => {
            document.querySelectorAll("progress, meter").forEach((element) => {
                element.value = element.dataset.value;
            });
        },
        clear: () => {
            document.querySelectorAll("progress, meter").forEach((element) => {
                element.dataset.value = element.value;
                element.value = 0;
            });
        },
        init: () => {
            airy.Progress.clear();
            setTimeout(airy.Progress.render, 1);
        },
    };

    this.SidePanel = {
        render: () => {
            document.querySelectorAll("[data-tuktuk=sidepanel]").forEach((element) => {
                const target = element;
                document.querySelectorAll(`[data-sidePanel=${target.id}]`).forEach(
                    (activator) => {
                        activator.addEventListener("click", function (event) {
                            if (target.classList.contains("active")) {
                                target.classList.remove("active");
                            } else {
                                target.classList.add("active");
                            }
                        });
                    }
                );
            });
        },
        show: (id) => {
            document.querySelectorAll(`#${id}`).forEach((element) => {
                element.classList.add("active");
            });
        },
        close: (id) => {
            document.querySelectorAll("#" + id).forEach((element) => {
                element.classList.remove("active");
            });
        },
        init: () => {
            airy.SidePanel.render();
        },
    };

    this.Accordion = {
        render: () => {
            document.querySelectorAll("[data-tuktuk=accordion]").forEach((element) => {
                let target = element;
                document.querySelectorAll(`[data-sidePanel=${target.id}]`).forEach(
                    (activator) => {
                        activator.addEventListener("click", function (event) {
                            if (target.classList.contains("active")) {
                                return target.classList.remove("active");
                            } else {
                                return target.classList.add("active");
                            }
                        });
                    }
                );
            });
        },
        init: () => {
            airy.Accordion.render();
        },
    };

    this.Toggle = {
        render: () => {
        },
        init: () => {
            airy.Toggle.render();
        }
    }


    this.Loading = {
        render: () => {
            if (!document.getElementById('id_airy_loading')) {
                const airyLoading = document.createElement('div');
                airyLoading.id = 'id_airy_loading';
                airyLoading.classList.add('airy-loading');
                const loader = document.createElement('div');
                loader.classList.add('airy-loading-loader');
                airyLoading.appendChild(loader);
                document.body.appendChild(airyLoading);
            }
        },
        show: () => {
            const airyLoading = document.getElementById('id_airy_loading');
            airyLoading.classList.add('active');
        },
        hide: () => {
            const airyLoading = document.getElementById('id_airy_loading');
            airyLoading.classList.remove('active');
        },
        init: () => {
            airy.Loading.render();
        }
    }

    return {
        Progress: airy.Progress,
        SidePanel: airy.SidePanel,
        Loading: airy.Loading,
    };

}

window.airy = Airy();
airy.Progress.init();
airy.SidePanel.init();
airy.Loading.init();
