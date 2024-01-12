export default interface RepositoryInterface<T> {
    save(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
}