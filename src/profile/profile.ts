export class Profile {
    path: string

    activate(path) {
        this.path = `profile/${path.path}.html`
    }
}
