quant = footage("Rotation.json").sourceData;
segDur = thisComp.layer("Master Control").effect("Segment Duration")("Slider");
pos0 = thisComp.layer("Rotation Control").effect("pos0")("Angle");
pos1 = thisComp.layer("Rotation Control").effect("pos1")("Angle");
pos2 = thisComp.layer("Rotation Control").effect("pos2")("Angle");
pos3 = thisComp.layer("Rotation Control").effect("pos3")("Angle");
pos4 = thisComp.layer("Rotation Control").effect("pos4")("Angle");
pos5 = thisComp.layer("Rotation Control").effect("pos5")("Angle");
pos6 = thisComp.layer("Rotation Control").effect("pos6")("Angle");
pos7 = thisComp.layer("Rotation Control").effect("pos7")("Angle");
pos8 = thisComp.layer("Rotation Control").effect("pos8")("Angle");
pos9 = thisComp.layer("Rotation Control").effect("pos9")("Angle");
pos10 = thisComp.layer("Rotation Control").effect("pos10")("Angle");
pos11 = thisComp.layer("Rotation Control").effect("pos11")("Angle");
pos12 = thisComp.layer("Rotation Control").effect("pos12")("Angle");

valueArray=[];
for(i=0;i<=132;i++)
{	p = Object.keys(quant[i]).indexOf("Copper");
	if(p==0)
	{
	valueArray[i] = pos0;
	}
	else if(p==1)
	{
	valueArray[i] = pos1;
	}
	else if(p==2)
	{
	valueArray[i] = pos2;
	}
	else if(p==3)
	{
	valueArray[i] = pos3;
	}
	else if(p==4)
	{
	valueArray[i] = pos4;
	}
	else if(p==5)
	{
	valueArray[i] = pos5;
	}
	else if(p==6)
	{
	valueArray[i] = pos6;
	}
	else if(p==7)
	{
	valueArray[i] = pos7;
	}
	else if(p==8)
	{
	valueArray[i] = pos8;
	}
	else if(p==9)
	{
	valueArray[i] = pos9;
	}
	else if(p==10)
	{
	valueArray[i] = pos10;
	}
	else if(p==11)
	{
	valueArray[i] = pos11;
	}
	else if(p==12)
	{
	valueArray[i] = pos12;
	}
	else 
	{
	valueArray[i] = 0;
	}
}

x = Math.floor(time/segDur);
startValue = valueArray[0+x];
endValue = valueArray[0+x+1];
ease(time,segDur*x,segDur*(x+1),[startValue],[endValue]) // add the delay() expression to the ease() function