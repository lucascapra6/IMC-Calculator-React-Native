class DateManager {
    constructor() {
        this.currentDate = new Date()
    }
    formatedCurrentDate() {
        const data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }
}

export default DateManager