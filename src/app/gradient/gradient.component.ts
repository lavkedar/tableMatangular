import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent {

  @ViewChild('css') cssBoard! : ElementRef;
  @ViewChild('svg') svgBoard! : ElementRef;
  @ViewChild('def') defTAg! : ElementRef;

  cssCode : string = ''

  onChange(event : any){
    console.log(this.cssCode,this.defTAg)
    let g = this.parseLinearGradient(this.cssCode)

    this.createSVGGradient(g.angle,g.colorStops)
    this.cssBoard.nativeElement.style.backgroundImage = `${this.cssCode}`
  }

  angleToSVGCoordinates(angle : any) {

    angle = Number(angle.split('deg')[0]) - 90
    console.log(angle)
    const rad = (angle * Math.PI) / 180;

    // Calculate the coordinates
    const x1 = 0.5 - 0.5 * Math.cos(rad);
    const y1 = 0.5 - 0.5 * Math.sin(rad);
    const x2 = 0.5 + 0.5 * Math.cos(rad);
    const y2 = 0.5 + 0.5 * Math.sin(rad);

    return { x1, y1, x2, y2 };
  }



  parseLinearGradient(gradientString : any) {
    const gradientRegex = /linear-gradient\((.*)\)/;
    const match = gradientString.match(gradientRegex);
    
    if (!match) {
        throw new Error('Invalid gradient string format');
    }
    
    const gradientDefinition = match[1];
    const parts = gradientDefinition.split(',');
    
    // Extract angle
    const angle = parts[0].trim();
    
    // Extract color stops
    const colorStops = parts.slice(1).map((part : any) => {
        const stopRegex = /(#?[\w]+)\s+(\d+%)/;
        const stopMatch = part.trim().match(stopRegex);
        
        if (stopMatch) {
            return {
                color: stopMatch[1],
                stop: stopMatch[2]
            };
        } else {
            throw new Error('Invalid color stop format');
        }
    });
    
    return {
        angle: angle,
        colorStops: colorStops
    };
}

createSVGGradient(angle : any , colorStops : any){

  console.log(colorStops)
  

  let coords = this.angleToSVGCoordinates(angle)

  console.log(coords)

  let stops = ''

  for(let i of colorStops){
    stops = stops +  `<stop offset="${i.stop}" stop-color="${i.color}"></stop>`
  }


  let lg = `<linearGradient id="myGradient" x1="${coords.x1}" y1="${coords.y1}" x2="${coords.x2}" y2="${coords.y2}" >
${stops}
</linearGradient>`

this.defTAg.nativeElement.innerHTML = lg

console.log(lg)







 
}

}

