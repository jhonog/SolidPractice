interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
}

class Tucan implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { 
        throw new Error("Esta ave no corre");
    }
}

class HumminBird implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { 
        throw new Error("Esta ave no corre");
    }
}

class Ostrich implements Bird {
    public fly(): void {
        throw new Error("Esta ave no vuela");
    }
    public eat(): void { }
    public run(): void { }
}

class Penguin implements Bird {
    public fly(): void {
        throw new Error("Esta ave no vuela");
    }
    public eat(): void { }
    public run(): void { 
        throw new Error("Esta ave no corre");
    }
}