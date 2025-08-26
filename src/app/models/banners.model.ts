export interface BannerFile {
    filePath: string;
    fileName: string;
    fileExtension: string;
    fileUrl: string;
}

export interface BannerFiles {
    desktop: BannerFile;
    tablet: BannerFile;
    mobile: BannerFile;
}

export interface Banner {
    id: number;
    name: string;
    description: string;
    forMobile: boolean;
    forDesktop: boolean;
    forTablet: boolean;
    active: boolean;
    heading: string;
    subheading: string;
    link: string;
    buttonText: string;
    isClickable: boolean;
    isExternal: boolean;
    confirmationText: string;
    popupText: string;
    screenName: string;
    weight: number;
    files: BannerFiles;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}