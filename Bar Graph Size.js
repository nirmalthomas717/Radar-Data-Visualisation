quant = footage("Return.json").sourceData;

G1 = thisComp.layer("Master Control").effect("G1")("Slider"); 
G2 = thisComp.layer("Master Control").effect("G2")("Slider")
G3 = thisComp.layer("Master Control").effect("G3")("Slider")
R1 = thisComp.layer("Master Control").effect("R1")("Slider");
R2 = thisComp.layer("Master Control").effect("R2")("Slider");
R3 = thisComp.layer("Master Control").effect("R3")("Slider");

Green_Scale_1 = thisComp.layer("Master Control").effect("Green_Scale_1")("Slider");
Green_Scale_2 = thisComp.layer("Master Control").effect("Green_Scale_2")("Slider");
Green_Scale_3 = thisComp.layer("Master Control").effect("Green_Scale_3")("Slider");
Red_Scale_1 = thisComp.layer("Master Control").effect("Red_Scale_1")("Slider");
Red_Scale_2 = thisComp.layer("Master Control").effect("Red_Scale_2")("Slider");
Red_Scale_3 = thisComp.layer("Master Control").effect("Red_Scale_3")("Slider");


segDur = thisComp.layer("Master Control").effect("Segment Duration")("Slider");
valueArray=[];
for(i=0;i<=132;i++)
	{	c=quant[i].PF;
		if(c>=R1 && c<=0)
		{
		 valueArray[i] = linear(c,R1,0,Red_Scale_1,1250);
		}
		else if(c>0 && c<=G1)
		{
		 valueArray[i] = linear(c,0,G1,1250,Green_Scale_1);
		}
		else if(c>G1 && c<=G2)
		{
		 valueArray[i] = linear(c,G1,G2,Green_Scale_1,Green_Scale_2);
		}
		else if(c>G2 && c<=G3)
		{
		 valueArray[i] = linear(c,G2,G3,Green_Scale_2,Green_Scale_3);
		}
		else if(c<R1 && c>=R2)
		{
		 valueArray[i] = linear(c,R1,R2,Red_Scale_2,Red_Scale_1);
		}
		else
		{
		 valueArray[i] = 1250;
		}
	}
x = Math.floor(time/segDur);
startValue = valueArray[0+x];
endValue = valueArray[0+x+1];
ease(time,segDur*x,segDur*(x+1),[120,startValue],[120,endValue]);