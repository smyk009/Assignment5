export class CounterService {
    activeCount = 0;
    inactiveCount = 0;
    setActiveCount(){
        this.activeCount++;
        console.log("inactive to active: " +this.activeCount);
    }

    setInactiveCount(){
        this.inactiveCount++;
        console.log("active to inactive: " +this.inactiveCount);
    }
}