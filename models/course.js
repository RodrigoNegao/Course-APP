class Course {
    constructor(
        id,
        categoryIds,
        title,
        opensource, // affordability
        osystem,    // OSystem complexity
        imageUrl,
        yearCreate,     // duration
        technologies, // ingredients
        companies,   // steps
        isFrameWork, //isGlutenFree
        isMobile,      // isVegan
        isWeb, //isVegetarian
        isDesktop)  //isLactoseFree
        {
         this.id = id;
         this.categoryIds = categoryIds;
         this.title = title;
         this.opensource = opensource;
         this.osystem = osystem;
         this.imageUrl = imageUrl;
         this.yearCreate = yearCreate;
         this.technologies = technologies;
         this.companies = companies;
         this.isFrameWork = isFrameWork;
         this.isMobile = isMobile;
         this.isWeb = isWeb;
         this.isDesktop = isDesktop;
    }
}

export default Course;