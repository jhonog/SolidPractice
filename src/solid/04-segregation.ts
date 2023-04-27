interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
}

class Tucan implements Bird {
    fly(): void { }
    eat(): void { }
    run(): void { 
        throw new Error("Esta ave no corre");
    }
}

class HumminBird implements Bird {
    fly(): void { }
    eat(): void { }
    run(): void { 
        throw new Error("Esta ave no corre");
    }
}

class Ostrich implements Bird {
    fly(): void {
        throw new Error("Esta ave no vuela");
    }
    eat(): void { }
    run(): void { }
}

class Penguin implements Bird {
    fly(): void {
        throw new Error("Esta ave no vuela");
    }
    eat(): void { }
    run(): void { 
        throw new Error("Esta ave no corre");
    }
}