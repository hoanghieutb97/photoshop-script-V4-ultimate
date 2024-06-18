if (xPosition + wLast + boxW <= wAll) {
    xPosition = xPosition + wLast;
    
    wLast = boxW;
    if (hLast <= boxH)
        hLast = boxH;
}
else {
    xPosition = 30;
    yPosition = yPosition + hLast;
    wLast = boxW;
    hLast = boxH;
}
