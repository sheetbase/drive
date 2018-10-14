import { DriveModule } from '../index';

// content folder: https://drive.google.com/drive/folders/1PZm1HEpCNUV3gR5DVq1PuULLs_dnvhdY?usp=sharing
const contentFolder = '1PZm1HEpCNUV3gR5DVq1PuULLs_dnvhdY';

const Drive = DriveModule({ contentFolder });

export function example1(): void {
    const text = Drive.get('1nxDE5wsKAm7Tfc95QAOWlTaa5I9y8eFE'); // file.txt
    const image = Drive.get('1rGI-wlNTDkgthzNfVZjKSzygjhD-WshV'); // image.jpg
    Logger.log(text);
    Logger.log(image);
}

export function example2(): void {
    const result1 = Drive.upload({
        name: 'file.txt',
        mimeType: 'text/plain',
        base64Content: 'SGVsbG8sIHdvcmxkIQ=='
    });
    const result2 = Drive.upload({
        name: 'file.txt',
        mimeType: 'text/plain',
        base64Content: 'SGVsbG8sIHdvcmxkIQ=='
    }, 'my_folder');
    const result3 = Drive.upload({
        name: 'file.txt',
        mimeType: 'text/plain',
        base64Content: 'SGVsbG8sIHdvcmxkIQ=='
    }, null, 'AUTO');
    const result4 = Drive.upload({
        name: 'file.txt',
        mimeType: 'text/plain',
        base64Content: 'SGVsbG8sIHdvcmxkIQ=='
    }, null, 'MD5');
    Logger.log(result1);
    Logger.log(result2);
    Logger.log(result3);
    Logger.log(result4);
}