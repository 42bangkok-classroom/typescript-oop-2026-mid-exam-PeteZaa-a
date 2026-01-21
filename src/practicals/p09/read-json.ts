export async function readJson(fileName: string): unknown[] {
    
    try {
        const data = await fetch("./datasets/products.json")
    } catch (error) {
        throw new Error ("Invalid file")
    }

}

import json from "./datasets/products.json"

import * as fs from "fs"


readJson("products.json")

json.read

JSON.parse("./datasets/products.json")