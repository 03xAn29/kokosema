export class Story {
    path: string

    activate(path) {
        this.path = `story/${path.path}.html`
    }
}
