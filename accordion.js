class Accordion {
    constructor() {
        this.accordion = null;
        this.accordionItems = null;
        this.isExpanded = false;
    }

    init() {
        const accordion = document.querySelector('.accordion');
        if (!accordion) {
            throw new Error("Accordion missing in this page");
        }
        this.accordion = accordion;
        this.accordionItems = this.accordion.querySelectorAll('.accordion-item');
        this.bindEvents();
    }

    bindEvents() {
        Array.from(this.accordionItems).forEach(item => {
            const body = item.querySelector('.accordion-body');
            body.classList.add('invisible');
            item.addEventListener('click', (e) => {
                this.toggleAccordion(e);
            });
        });
    }

    toggleAccordion(e) {
        const accordionItem = e.target.closest('.accordion-item');
        const accordionBody = accordionItem.querySelector('.accordion-body');
        if (!this.isExpanded) {
            accordionBody.classList.remove('invisible');
            accordionBody.classList.add('visible');
            this.isExpanded = true;
        }
        else {
            accordionBody.classList.remove('visible');
            accordionBody.classList.add('invisible');
            this.isExpanded = false;
        }
    }

    bindAccordion(datas){
        datas.forEach(item=>{
            let accordionItem = this.createAccordionItem(item);
            this.accordion.appendChild(accordionItem);
        })
    }

    createAccordionItem(item){

        //generate Accordion parts
        const accordionParts = this.generateAccordionParts();
        accordionParts.accordionTitleP.textContent = item.title;
        accordionParts.accordionTitleI.className = 'fa-solid fa-plus';
        accordionParts.accordionBodyP.textContent = item.body;

        // appendChilds
        accordionParts.accordionBodyInner.appendChild(accordionParts.accordionBodyP);
        accordionParts.accordionBody.appendChild(accordionParts.accordionBodyInner);

        accordionParts.accordionTitle.appendChild(accordionParts.accordionTitleP);
        accordionParts.accordionTitle.appendChild(accordionParts.accordionTitleI);

        accordionParts.accordionItem.appendChild(accordionParts.accordionTitle);
        accordionParts.accordionItem.appendChild(accordionParts.accordionBody);

        //setting classes

        accordionParts.accordionItem.classList.add('accordion-item');
        accordionParts.accordionTitle.classList.add('accordion-title');
        accordionParts.accordionBody.classList.add('accordion-body');
        accordionParts.accordionBodyInner.classList.add('accordion-body-inner');
        
        return accordionParts.accordionItem;
    }

    generateAccordionParts(){
        let accordionItem = document.createElement('div');
        let accordionTitle = document.createElement('div');
        let accordionBody = document.createElement('div');
        let accordionBodyInner = document.createElement('div');
        let accordionTitleP = document.createElement('p');
        let accordionTitleI = document.createElement('i');
        let accordionBodyP = document.createElement('p');
        
        return {
            accordionItem,
            accordionTitle,
            accordionBody,
            accordionBodyInner,
            accordionTitleP,
            accordionTitleI,
            accordionBodyP
        }
    }
}