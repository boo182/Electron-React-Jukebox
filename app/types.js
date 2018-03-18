// @flow


export type Thumbnails = {
    height: number
};

export type Songs = {
    playlist: sring,
    songId: number,
    thumbnails: Thumbnails,
    title: string,
    url: string,
    duration: string,
    songPosition: number
};

export type Playlist = Array<Songs>;
