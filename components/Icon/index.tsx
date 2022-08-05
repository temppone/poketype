import Image from 'next/image';

interface IIcon {
    icon: string;
    color: string;
}

export const Icon = ({ icon, color }: IIcon) => {
    return (
        <div
            style={{
                color: color,
            }}
        >
            <Image src={icon} />
        </div>
    );
};
