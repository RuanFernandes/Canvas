class GameObjects {
    constructor() {
        this.GameObjects = [];
    }
    add(gameObject) {
        if (gameObject.name === undefined || gameObject.name === null || gameObject.name === '') {
            throw new Error('GameObjects.add: GameObject.name is undefined');
        }

        if (this.findObjectByName(gameObject.name)) {
            throw new Error('GameObject with name ' + gameObject.name + ' already exists');
        }

        this.GameObjects.push({ name: gameObject.name, instance: gameObject.instance });
        console.log('GameObject ' + gameObject.name + ' added');
    }

    remove(name) {
        if (name === undefined || name === null || name === '') {
            throw new Error('GameObjects.remove: name is undefined');
        }

        if (!this.findObjectByName(name)) {
            throw new Error('GameObject with name ' + name + ' does not exist');
        }

        this.GameObjects = this.GameObjects.filter(gameObject => gameObject.name !== name);

        console.log('GameObject ' + name + ' removed');
    }

    update() {
        this.GameObjects.forEach(gameObject => {
            if (gameObject.instance.update) {
                gameObject.instance.update();
            }
        });
    }

    render() {
        this.GameObjects.forEach(gameObject => {
            if (gameObject.instance.render) {
                gameObject.instance.render();
            }
        });
    }

    findObjectByName(name) {
        return this.GameObjects.find(gameObject => gameObject.name === name);
    }

    findObjectsByNameStart(name) {
        return this.GameObjects.filter(gameObject => gameObject.name.startsWith(name));
    }
}

export default GameObjects;