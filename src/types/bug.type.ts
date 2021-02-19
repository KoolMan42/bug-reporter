enum priority{
    LOW,
    MEDIUM,
    HIGH
}

interface bug{
    id:number,
    nameOfBug:string,
    isFixed: boolean,
    priorityLevel: priority
}