"use client";
import RgbaToHexToolOverview from "@/components/(overview)/RgbaToHexToolOverview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import rgbaToHex from "@/utils/rgbaToHex";
import { Copy } from "lucide-react";
import React from "react";

const RGBAtoHex: React.FC = () => {
  const [rgba, setRgba] = React.useState({ r: 255, g: 0, b: 0, a: 1 });
  const [hex, setHex] = React.useState(
    rgbaToHex(rgba.a, rgba.g, rgba.b, rgba.a)
  );

  const copyToClipboard = useCopyToClipboard();

  React.useEffect(() => {
    const handleConvert = () => {
      setHex(rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.a));
    };

    handleConvert();
  }, [rgba, hex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRgba((prev) => ({
      ...prev,
      [name]: name === "a" ? parseFloat(value) : parseInt(value, 10),
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-background pb-12">
        <div className="max-w-md w-full space-y-6">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>RGBA to HEX</CardTitle>
              <CardDescription>
                Convert RGBA color values to HEX.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="red">Red</Label>
                  <Input
                    name="r"
                    value={rgba.r}
                    onChange={handleChange}
                    id="red"
                    type="number"
                    min="0"
                    max="255"
                    placeholder="255"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="green">Green</Label>
                  <Input
                    name="g"
                    value={rgba.g}
                    onChange={handleChange}
                    id="green"
                    type="number"
                    min="0"
                    max="255"
                    placeholder="255"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blue">Blue</Label>
                  <Input
                    name="b"
                    value={rgba.b}
                    onChange={handleChange}
                    id="blue"
                    type="number"
                    min="0"
                    max="255"
                    placeholder="255"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alpha">Alpha</Label>
                  <Input
                    name="a"
                    value={rgba.a}
                    onChange={handleChange}
                    id="alpha"
                    type="number"
                    step="0.1"
                    min="0"
                    max="1"
                    placeholder="1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rgba">RGBA</Label>
                <Input
                  name="rgba"
                  id="rgba"
                  type="text"
                  placeholder="255"
                  value={`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
                  className="w-fit"
                  readOnly
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="bg-card">
                <Label>Preview & Converted</Label>
                <div className="flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-md"
                    style={{
                      backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
                    }}
                  />
                  <p className="font-mono text-lg">{hex}</p>
                  <Button
                    onClick={() => copyToClipboard(hex.toString())}
                    variant={"outline"}
                    className="ml-4"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <RgbaToHexToolOverview />
    </>
  );
};

export default RGBAtoHex;
