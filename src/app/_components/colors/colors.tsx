import { tailwindColors } from "@/tailwind.config";

export const Colors: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Object.entries(tailwindColors).map(([name, color]) => (
                <ColorBox key={name} name={name} color={color} />
            ))}
        </div>
    );
};

interface ColorBoxProps {
    name: string;
    color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ name, color }) => {
    // Assuming color is a hex value or something similar that can be used in CSS
    return (
        <div  className="w-96 h-60 flex flex-col items-center justify-center uppercase text-center" style={{ backgroundColor: color }}>
   <span>{name}</span>
   <span>{color}</span>
        </div>
    );
};
