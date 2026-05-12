import fs from 'fs';

export const getListFromFile = (filePath: string): Record<string, string[]> => {
    const input = fs.readFileSync(filePath, 'utf-8');

    const output = input
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => {
            const parts = line.split(/\s+/);
            if (parts.length < 2) return null;

            const name = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
            const number = parts[1];
            return { name, number };
        })
        .filter(item => item !== null)
        .reduce((acc, item) => {
            const { name, number } = item;

            if (!acc[number]) {
                acc[number] = new Set<string>();
            }

            acc[number].add(name);

            return acc;
        }, {} as Record<string, Set<string>>);

    return Object.fromEntries(
        Object.entries(output).map(([number, names]) => [number, Array.from(names)])
    )
}