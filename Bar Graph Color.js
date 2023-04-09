quant = footage("Return.json").sourceData;

G1 = thisComp.layer("Master Control").effect("G1")("Slider"); 
G2 = thisComp.layer("Master Control").effect("G2")("Slider")
G3 = thisComp.layer("Master Control").effect("G3")("Slider")
R1 = thisComp.layer("Master Control").effect("R1")("Slider");
R2 = thisComp.layer("Master Control").effect("R2")("Slider");
R3 = thisComp.layer("Master Control").effect("R3")("Slider");

segDur = thisComp.layer("Master Control").effect("Segment Duration")("Slider");
valueArray=[];
for(i=0;i<=132;i++)
	{	c=quant[i].PF;
		if(c>=R1 && c<=0)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 5")("Color");
		}
		if(c>0 && c<=G1)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 9")("Color");
		}
		else if(c>G1 && c<=G2)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 11")("Color");
		}
		else if(c>G2 && c<=G3)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 12")("Color");
		}
		else if(c<R1 && c>=R2)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 3")("Color");
		}
		else if(c<R2 && c>=R3)
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control")("Color");
		}
		else
		{
		 valueArray[i] = thisComp.layer("Colour Control").effect("Color Control 4")("Color");
		}
	}
x = Math.floor(time/segDur);
startValue = valueArray[0+x];
endValue = valueArray[0+x+1];
ease(time,segDur*x,segDur*(x+1),startValue,endValue);